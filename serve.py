import http.server
import socketserver
import mimetypes
import os

mimetypes.add_type('text/javascript', '.js')
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('image/svg+xml', '.svg')

PORT = 8080
DIRECTORY = os.path.join(os.path.dirname(__file__), "dist") if os.path.exists(os.path.join(os.path.dirname(__file__), "dist")) else os.path.dirname(__file__)

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
    print(f"Portfolio Server running at: http://localhost:{PORT}")
    print(f"Serving directory: {DIRECTORY}")
    httpd.serve_forever()
