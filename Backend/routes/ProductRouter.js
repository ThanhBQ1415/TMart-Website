const express = require("express");
const Product = require("../db/productModel");
const router = express.Router();
const auth = require("../middleware/auth.middleware")

router.get(
    "/list", 
    async (request, response) => {
      try {
        const product = await Product.find().select("name price description file_name");
        response.send(product);
      } catch (error) {
        response.status(500).send({ error });     
      }
  });
  
  router.get(
    "/:id", 
    async (request, response) => {
      try {
        const id = request.params.id;
        const product = await Product.find({ _id: id });
        response.send(product);
      } catch (error) {
        response.status(500).send({ error });
      }
  }); 
  router.get(
    "/search/:name", 
    async (request, response) => {
      try {
        const name = request.params.name;
        const regex = new RegExp(name, 'i');
        const product = await Product.find({ name: { $regex: regex } });
        response.send(product);
      } catch (error) {
        response.status(500).send({ error });
      }
  }); 

  router.get(
    "/list1/laptop", 
    async (request, response) => {
      try {
        const product = await Product.find({ type_product: 'laptop' });
        response.send(product);
        
      } catch (error) {
        response.status(500).send({ error });
      }
  }); 
  router.get(
    "/list2/smartphone", 
    async (request, response) => {
      try {
        const product = await Product.find({ type_product: 'smartphone' });
        response.send(product);
        
      } catch (error) {
        response.status(500).send({ error });
      }
  }); 
  router.get(
    "/list3/keyboard", 
    async (request, response) => {
      try {
        const product = await Product.find({ type_product: 'keyboard' });
        response.send(product);
        
      } catch (error) {
        response.status(500).send({ error });
      }
  }); 
  router.get(
    "/list4/mouse", 
    async (request, response) => {
      try {
        const product = await Product.find({ type_product: 'mouse' });
        response.send(product);
        
      } catch (error) {
        response.status(500).send({ error });
      }
  }); 
module.exports = router;