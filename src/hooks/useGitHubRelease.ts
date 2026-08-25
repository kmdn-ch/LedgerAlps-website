import { useState, useEffect } from 'react';
import { fetchLatestGitHubRelease, GitHubReleaseInfo } from '../services/githubRelease';

export function useGitHubRelease() {
  const [release, setRelease] = useState<GitHubReleaseInfo>({
    tagName: 'v1.5.4',
    version: 'v1.5.4',
    releaseName: 'LedgerAlps v1.5.4',
    publishedAt: '2026',
    htmlUrl: 'https://github.com/kmdn-ch/LedgerAlps/releases/latest',
    downloadUrl: 'https://github.com/kmdn-ch/LedgerAlps/releases/latest',
    exeAssetName: 'LedgerAlps-Setup-x64.exe',
    isLiveSync: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetchLatestGitHubRelease().then((data) => {
      if (isMounted) {
        setRelease(data);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return { release, loading };
}
