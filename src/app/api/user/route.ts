

import { NextResponse } from 'next/server';

import db from '../../db/connection'
import Product from '../../models/Productmodel'
import type { NextApiRequest, NextApiResponse } from 'next';

const POST = async (request: Request) => {
  await db();

  const data = await request.formData();
  var product_name: any = data.get('name')
  var product_description: any = data.get('description')
  var product_price: any = data.get('price')
  // var product_picture: any = data.get('picture')

  const ProductData = {
    name: product_name,
    description: product_description,
    price: product_price,
    // picture: product_picture
  }

  // Save the product
  await Product.create(ProductData)
  try {
    return NextResponse.json({ message: 'Product created', data: ProductData }, { status: 201 });
  } catch (error) {
    // Handle errors
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
};




export { POST };
