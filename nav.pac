function FindProxyForURL(url, host)
{
  if (shExpMatch(host, "stash.adeo.no") ||
      shExpMatch(host, "repo.adeo.no") ||
      shExpMatch(host, "vault.adeo.no") ||
      shExpMatch(host, "vault-dev.adeo.no") ||
      shExpMatch(host, "apiserver.*.nais.io") ||
      shExpMatch(host, "vera.adeo.no") ||
      shExpMatch(host, "jenkins*.adeo.no") ||
      shExpMatch(host, "*jenkins.adeo.no")) {
    return "SOCKS localhost:14122";
  } else if (shExpMatch(host, "*.dev-gcp.nais.io") ||
             shExpMatch(host, "*.dev-nav.no") || 
             shExpMatch(host, "*.dev-adeo.no")) {
    return "SOCKS localhost:14134";
  } else if (shExpMatch(host, "*.prod-gcp.nais.io") ||
             shExpMatch(host, "familie-prosessering.adeo.no") || 
             shExpMatch(host, "basta.adeo.no") ||
             shExpMatch(host, "basta-frontend.adeo.no")) {
    return "SOCKS localhost:14135";
  } else if (shExpMatch(host, "kubeflow.adeo.no") {
    return "SOCKS localhost:14139";
  }

  return "DIRECT";
}
