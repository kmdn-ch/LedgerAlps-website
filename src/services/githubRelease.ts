export interface GitHubAsset {
  name: string;
  browser_download_url: string;
  size: number;
  download_count: number;
  content_type: string;
}

export interface GitHubReleaseInfo {
  tagName: string;
  version: string;
  releaseName: string;
  publishedAt: string;
  htmlUrl: string;
  downloadUrl: string;
  exeAssetName?: string;
  exeAssetSize?: number;
  body?: string;
  isLiveSync: boolean;
}

const FALLBACK_RELEASE: GitHubReleaseInfo = {
  tagName: 'v1.5.4',
  version: 'v1.5.4',
  releaseName: 'LedgerAlps v1.5.4',
  publishedAt: '2026-02-15',
  htmlUrl: 'https://github.com/kmdn-ch/LedgerAlps/releases/latest',
  downloadUrl: 'https://github.com/kmdn-ch/LedgerAlps/releases/latest',
  exeAssetName: 'LedgerAlps-Setup-x64.exe',
  isLiveSync: false,
};

const CACHE_KEY = 'ledgeralps_gh_release_cache';
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes cache

export async function fetchLatestGitHubRelease(): Promise<GitHubReleaseInfo> {
  // Check localStorage cache first
  if (typeof window !== 'undefined') {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL_MS && parsed.data) {
          return { ...parsed.data, isLiveSync: true };
        }
      }
    } catch {
      // Ignore cache parse error
    }
  }

  try {
    const response = await fetch('https://api.github.com/repos/kmdn-ch/LedgerAlps/releases/latest', {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!response.ok) {
      // If 404 (no release yet) or 403 (rate limited), fallback cleanly
      return FALLBACK_RELEASE;
    }

    const data = await response.json();
    const tagName = data.tag_name || 'v1.5.4';
    const version = tagName.startsWith('v') ? tagName : `v${tagName}`;
    
    // Find Windows installer .exe asset
    let exeAsset: GitHubAsset | undefined;
    if (Array.isArray(data.assets) && data.assets.length > 0) {
      exeAsset = data.assets.find((a: GitHubAsset) => a.name.toLowerCase().endsWith('.exe'));
    }

    const releaseInfo: GitHubReleaseInfo = {
      tagName,
      version,
      releaseName: data.name || `LedgerAlps ${version}`,
      publishedAt: data.published_at || new Date().toISOString(),
      htmlUrl: data.html_url || 'https://github.com/kmdn-ch/LedgerAlps/releases/latest',
      downloadUrl: exeAsset?.browser_download_url || data.html_url || 'https://github.com/kmdn-ch/LedgerAlps/releases/latest',
      exeAssetName: exeAsset?.name || 'LedgerAlps-Setup-x64.exe',
      exeAssetSize: exeAsset?.size,
      body: data.body,
      isLiveSync: true,
    };

    // Save to cache
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: Date.now(),
            data: releaseInfo,
          })
        );
      } catch {
        // Ignore quota error
      }
    }

    return releaseInfo;
  } catch {
    return FALLBACK_RELEASE;
  }
}
