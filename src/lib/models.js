import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        nombre: String,
        edad: Number,
    },
    { versionKey: false } // esquema no almacena propiedad __v
);

// Crear un modelo basado en el esquema
export const User = mongoose.models.User || mongoose.model('User', userSchema);
