using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
using System.Web.Script.Serialization;

namespace BearGryllsApp.Controllers
{
    public class MainPageController : Controller
    {
        // GET: MainPage

        public void Common()
        {
            var trips = System.IO.File.ReadAllText(Server.MapPath("~/Scripts/data.json"));
            JavaScriptSerializer json_serializer = new JavaScriptSerializer();
            object data = json_serializer.DeserializeObject(trips);
            ViewBag.data = data;
        }

        public ActionResult Index()
        {
            Common();
            return View();
        }
        public ActionResult SelectTrip(string tripId)
        {
            Common();
            ViewBag.SelectedTripId = tripId;
            return View("Index");
        }

        // GET: MainPage/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: MainPage/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: MainPage/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: MainPage/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: MainPage/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: MainPage/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: MainPage/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
