run postMessage Example:
1.add following to hosts file:
    127.0.0.1 chat.example.net
    127.0.0.1 portal.example.com
2.Navigate to the directory that contains the two example files(postMessageParent.html and postMessageWidget.html)
3.Start Python as follows:(NOTE:in the command line, current directory MUST be the step2, then start python)
    python -m SimpleHTTPServer 9999
4.open browser: http://portal.example.com:9999/postMessagePortal.html
