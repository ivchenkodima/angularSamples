using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace AJAX_Basics_JavaScript
{
    public class HandlerXML : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            // Читаем весь контент, который пришел со стороны клиента (в даном случае XML документ)
            StreamReader reader = new StreamReader(context.Request.InputStream);
            var parametrs = reader.ReadToEnd();
            reader.Close();

            context.Response.ContentType = "text/xml";
            context.Response.Write(parametrs); // в ответ отправляем XML документ
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