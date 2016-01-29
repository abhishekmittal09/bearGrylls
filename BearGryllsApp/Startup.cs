using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BearGryllsApp.Startup))]
namespace BearGryllsApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
