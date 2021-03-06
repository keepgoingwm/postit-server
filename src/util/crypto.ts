import crypto from 'crypto'

export const randomString = (length = 12): string => crypto.randomBytes(Math.ceil(length / 2)).toString('hex')
