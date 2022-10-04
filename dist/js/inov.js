/**
 * Inov v1.1.3 (http://team.dkyung213.kr/)
 * Copyright 2022 Dokyung Kim (http://team.dkyung213.kr/?type=github&id=inov)
 * Licensed Under GNU General Public License v3.0
 */

// Copy Function
function inovCopy(val) {
  var t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);
  alert("Successfully copied!");
}

// LInk service Function
function inovLinkTo(httpsYorN, urlOrigin, urlPathName) {
  if (httpsYorN == "a") {
    var https = "https://";
  } else if (httpsYorN == "na") {
    var https = "http://";
  }
  if (urlOrigin == "") {
    location.href = urlPathName;
  } else if (urlOrigin != "") {
    location.href = https + urlOrigin + urlPathName;
  }
}

// Get parameter by name Function
function inovGetParam(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Change cookie value Function
function inovControlCookie(name, value) {
  document.cookie = name + "=" + value + ";";
}
