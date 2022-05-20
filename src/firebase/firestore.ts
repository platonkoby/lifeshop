import { getDocs, collection, getFirestore } from 'firebase/firestore'
import { app } from './firebase'

// init firestore

const db = getFirestore(app)


// get collections references

const shopRef = collection(db, 'products')
const goalsRef = collection(db, 'goals')
const shopItemsInCartRef = collection(db, 'productsInCart')
const goalItemsInCartRef = collection(db, 'goalsInCart')


// get collections data requests

export const shopRequest = getDocs(shopRef)
export const goalsRequest = getDocs(goalsRef)
export const shopItemsInCartRequest = getDocs(shopItemsInCartRef)
export const goalItemsInCartRequest = getDocs(goalItemsInCartRef)

// get stats reference

const statsRef = collection(db, 'stats')

export const statsRequest = getDocs(statsRef)