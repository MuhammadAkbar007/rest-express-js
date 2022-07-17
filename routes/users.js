import { Router } from 'express'
import { createUser, getUsers, getUserById, deleteUser, updateUser } from '../controllers/usersControllers.js'

const router = Router()

router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', getUserById)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router