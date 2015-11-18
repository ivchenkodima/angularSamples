using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace AJAX_Basics_JavaScript
{
    // Handler (Http обработчик) - ресурс на стороне сервера способный обрабатывать входящие HTTP запросы.
    public class Handler : IHttpHandler
    {
        // Метод вызывается при поступлении HTTP запроса по адресу HandlerData.ashx
        public void ProcessRequest(HttpContext context)
        {
            var parametrs = context.Request.Form;
            context.Response.ContentType = "text/plain";
            context.Response.Write("Name = " + parametrs[0] + " Location = " + parametrs[1]);
        }

        public bool IsReusable
        {
            get
            {
                return true;
            }
        }
    }
}