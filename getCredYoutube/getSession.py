from mitmproxy import ctx
from mitmproxy import http

class GrabSession:

    filter = "get_channel_dashboard"

    def request(self, flow: http.HTTPFlow) -> None:
        if(self.filter in flow.request.pretty_url):
            cookie = flow.request.headers.get("Cookie")
            auth = flow.request.headers.get("Authorization")

            cookie = cookie.replace(",",";")
            auth = auth.replace(",",";")

            if True:
                with open("/root/session.txt", "w") as f:
                    f.write("[-] Session Info [-]\n")
                    f.write("\n")
                    f.write(f"Cookie: {cookie}\n")
                    f.write(f"Authorization: {auth}\n")

addons = [GrabSession()]
