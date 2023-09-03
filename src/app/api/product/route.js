import { NextResponse } from "next/server";

export async function GET(req, res){

    const {searchParams} = new URL(req.url);

    const newID = searchParams.get("id");
    const myCity = searchParams.get('city');

    return NextResponse.json({
        msg: newID, myCity
    })

}


export async function POST(req, res){
    // const reqBody = await req.json();

    // let name = reqBody['id'];
    // let city = reqBody['city'];

    // return NextResponse.json({
    //     name: name,
    //     city: city
    // })

    const reqBody = await req.formData();

    let id = reqBody.get('id');
    let name = reqBody.get('name');

    return NextResponse.json({
        name: name,
        id: id
    })


}