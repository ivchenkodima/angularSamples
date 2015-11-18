using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AJAX_Basics_JavaScript
{
    public class HandlerTime : IHttpHandler
    {
        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            context.Response.Write(DateTime.Now);   
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}