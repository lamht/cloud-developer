import { TodosAccess } from './todosAcess'
import { AttachmentUtils } from './attachmentUtils';
import { TodoItem } from '../models/TodoItem'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'
import { createLogger } from '../utils/logger'
import * as uuid from 'uuid'
// import * as createError from 'http-errors'

const logger = createLogger('Todo-Business-Logic') 
const todosAccess = new TodosAccess()
const attachmentUtils = new AttachmentUtils()

// TODO: Implement businessLogic
export async function createTodo(userId: string, newTodo: CreateTodoRequest): Promise<TodoItem>{
    logger.info(`create todo: user ${userId}, data ${newTodo}`);
    const todoId = uuid.v4();
    logger.info('Create TODO with generated uuid', { todoId });

    const newTodoItem: TodoItem = {
        userId,
        todoId,
        createdAt: new Date().toISOString(),
        ...newTodo,
        done: false
    }


    return await todosAccess.createTodo(newTodoItem);
}

export async function getTodosForUser(userId: string): Promise<TodoItem[]>{
    return await todosAccess.getTodos(userId)
}

export async function deleteTodo(userId: string, todoId: string){
    logger.info(`delete todo, userId ${userId}, todoId ${todoId}`);
    return await todosAccess.deleteTodo(todoId, userId)
}

export async function createAttachmentPresignedUrl(userId: string, todoId: string): Promise<string>{
    logger.info(`create Presigned Url, userId ${userId}, todoId ${todoId}`);
    return await attachmentUtils.getSignedUrl(todoId);
}

export async function updateTodo(userId: string, todoId: string, updatedTodo: UpdateTodoRequest) {
    logger.info(`update todo, userId ${userId}, todoId ${todoId}, data ${updatedTodo}`);
    return await todosAccess.updateTodo(todoId, userId, updatedTodo)
}