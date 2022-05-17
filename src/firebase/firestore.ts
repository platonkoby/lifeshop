import { getDocs, collection, getFirestore } from 'firebase/firestore'
import { app } from './firebase'

// init firestore

const db = getFirestore(app)


// get collections references

export const productsRef = collection(db, 'products')
const goalsRef = collection(db, 'goals')


// get collections data requests

export const productsRequest = getDocs(productsRef)
