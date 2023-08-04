export const menuNames = (typeUser) => {
    const menu = {
        invitado: ['LITERAS', 'COMIDA DE PERRO', 'COMIDA DE GATO', 'TRANSPORTADORAS', 'JUGUETES', 'PELUQUERIA', 'VACUNAS'],
        cliente: ['MASCOTAS', 'AGENDA', 'TURNO MEDICO', 'PAGOS', 'HISTORIA CLINICA'],
        profesional: ['AGENDA', 'VETERINARIAS', 'MASCOTAS', 'REPORTES DE PAGO'],
        administrador: ['USUARIOS', 'BITACORAS', 'ERRORES DE USUARIO', 'PERMISOS DE USUARIO', 'BACKUP'],
        veterinaria: ['PROFESIONALES', 'MASCOTAS', 'COBROS', 'PAGOS']
    }
    return menu[typeUser]
}
