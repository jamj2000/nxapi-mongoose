import connectDB from '@/lib/db';
import { User } from '@/lib/models';




export async function GET(request) {
    await connectDB();

    const results = await User.find({})

    return Response.json(results);
}



export async function POST(request) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    await connectDB();

    const { nombre, edad } = await request.json() // Read body request

    const user = new User({ nombre, edad })
    const results = await user.save()

    return Response.json(results)

}

