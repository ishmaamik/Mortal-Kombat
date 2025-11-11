import {Router} from 'express'
import { createUser, deleteUser, fetchUsers, fetchUsersByEmail, updateUser } from './controller.js'

const router= Router()

router.get('/', fetchUsers)
router.get('/:email', fetchUsersByEmail)
router.post('/create', createUser)
router.delete('/:id',deleteUser)
router.put('/:id', updateUser)

export default router