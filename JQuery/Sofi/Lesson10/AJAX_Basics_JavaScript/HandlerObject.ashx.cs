using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace AJAX_Basics_JavaScript
{
    /// <summary>
    /// Summary description for Handler1
    /// </summary>
    public class Handler1 : IHttpHandler
    {
        public class Address
        {
            public string addressline1, addressline2, city, state, country;
            public int pin;
        }

        public class Person
        {
            public string firstName, lastName, department;
            public Address address = new Address();
            public string[] technologies;
        }

        public void ProcessRequest(HttpContext context)
        {
            var parametrs = context.Request.Form;

            context.Response.ContentType = "json/application"; 
            
            // Класс для сериализации в JSON
            JavaScriptSerializer js = new JavaScriptSerializer();

            Person p1 = new Person();
            p1.firstName = "Ivan";
            p1.lastName = "Ivanov";
            p1.department = "Microsoft";
            p1.address.addressline1 = "Microsoft Ukraine";
            p1.address.addressline2 = "K234";
            p1.address.city = "Kyiv";
            p1.address.state = "Kyivska";
            p1.address.country = "Ukraine";
            p1.address.pin = 34524;
            p1.technologies = new string[] { "IIS", "ASP.NET", "JavaScript", "AJAX" };

            Person p2 = new Person();
            p2.firstName = "Andrew";
            p2.lastName = "Krauch";
            p2.department = "Microsoft";
            p2.address.addressline1 = "Microsoft England";
            p2.address.addressline2 = "PSS - DSI";
            p2.address.city = "London";
            p2.address.state = "England";
            p2.address.country = "GB";
            p2.address.pin = 560028;
            p2.technologies = new string[] { "IIS", "JavaScript", "AJAX" };

            string str;

            if (parametrs[0] == "Ivan")
            {
                // сериализация объеткта в JSON
                str = js.Serialize(p1);
            }
            else
            {
                str = js.Serialize(p2);
            }

            context.Response.Write(str);

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