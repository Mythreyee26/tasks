using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", (HttpContext context) =>
{
    var message = Environment.GetEnvironmentVariable("MESSAGE") ?? "No MESSAGE env var set";
    var flag = Environment.GetEnvironmentVariable("FLAG") ?? "No FLAG env var set";

    context.Response.ContentType = "text/html";

    return $@"
        <html>
        <head><title>.NET Core Env Vars</title></head>
        <body>
            <h1>.NET Core Environment Variables</h1>
            <p><strong>MESSAGE:</strong> {message}</p>
            <p><strong>FLAG:</strong> {flag}</p>
        </body>
        </html>";
});

app.Run();
