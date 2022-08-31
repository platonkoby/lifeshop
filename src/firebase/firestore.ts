import { getDocs, collection, getFirestore, setDoc, doc, updateDoc } from 'firebase/firestore'
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
const dailyStats = collection(db, 'daily-stats')

export const statsRequest = getDocs(statsRef)
export const dailyStatsRequest = getDocs(dailyStats)

// set a document

export async function createDocumentInCollection(collection : string, path: string, obj : object ) {
    await setDoc(doc(db, collection, path), obj)
}

// update a document

export async function updateDocumentInCollection(collection : string, path : string, change : object) {
    await updateDoc(doc(db, collection, path), change)
}

