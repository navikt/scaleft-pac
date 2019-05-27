function FindProxyForURL(url, host)
{
  if (shExpMatch(host, "jira.adeo.no")) {
    return "SOCKS localhost:14122;SOCKS localhost:5000";
  }

  return "DIRECT";
}
