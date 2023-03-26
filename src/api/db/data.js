import lodash, {isEmpty} from 'lodash'
import {LowSync} from 'lowdb'
import {LocalStorage} from 'lowdb/browser'
import data from './db.json'

class LowSyncWithLodash extends LowSync {
    chain: lodash.ExpChain = lodash.chain(this).get('data')
}

const adapter = new LocalStorage('db')
const db = new LowSyncWithLodash(adapter)

db.read()
if (isEmpty(db.data)) {
    db.data = data;
    db.write()
}


export default db




