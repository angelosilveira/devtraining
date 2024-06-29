import { CreateCoursesTable1719633870560 } from 'src/migrations/1719633870560-CreateCoursesTable'
import { dataSourceOptions } from './database.module'
import { DataSource } from 'typeorm'
import { CreateTagsTable1719634953286 } from 'src/migrations/1719634953286-CreateTagsTable'
import { CreateCoursesTagsTable1719635779098 } from 'src/migrations/1719635779098-CreateCoursesTagsTable'
import { AddCoursesIdToCoursesTagsTable1719636346458 } from 'src/migrations/1719636346458-AddCoursesIdToCoursesTagsTable'
import { AddTagsIdToCoursesTagsTable1719637509464 } from 'src/migrations/1719637509464-AddTagsIdToCoursesTagsTable'

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1719633870560,
    CreateTagsTable1719634953286,
    CreateCoursesTagsTable1719635779098,
    AddCoursesIdToCoursesTagsTable1719636346458,
    AddTagsIdToCoursesTagsTable1719637509464,
  ],
})
