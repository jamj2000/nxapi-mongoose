import connectDB from '@/lib/db';
import { User } from '@/lib/models';



export async function GET(request, { params }) {
    await connectDB();

    const { id } = await params
    const results = await User.findOne({ _id: id })

    return Response.json(results);
}


export async function PUT(request, { params }) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    await connectDB();

    const { id } = await params
    const { nombre, edad } = await request.json() // Read body request
    const results = await User.findOneAndUpdate(
        { _id: id },
        { $set: { nombre, edad } },
        { new: true }  // results contendrá objeto modificado
    )

    return Response.json(results);
}


export async function DELETE(request, { params }) {
    await connectDB();

    const { id } = await params
    const results = await User.findOneAndRemove({ _id: id })

    return Response.json(results);
}
