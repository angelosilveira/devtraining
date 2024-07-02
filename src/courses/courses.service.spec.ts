import { randomUUID } from 'node:crypto'
import { CoursesService } from './courses.service'

describe('CoursesService unit tests', () => {
  let service: CoursesService
  let id: string
  let createdAt: Date
  let expectOutPutTags: any
  let expectOutPutCourses: any
  let mockCourseRepository: any
  let mockTagRepository: any

  beforeEach(async () => {
    service = new CoursesService()
    id = randomUUID()
    createdAt = new Date()
    expectOutPutTags = [
      {
        id,
        name: 'nestjs',
        createdAt,
      },
    ]

    expectOutPutCourses = [
      {
        id,
        name: 'test',
        description: 'test description',
        createdAt,
        tasg: expectOutPutTags,
      },
    ]

    mockCourseRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutPutCourses)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOutPutCourses)),
      update: jest.fn().mockReturnValue(Promise.resolve(expectOutPutCourses)),
      preload: jest.fn().mockReturnValue(Promise.resolve(expectOutPutCourses)),
      findAll: jest.fn().mockReturnValue(Promise.resolve(expectOutPutCourses)),
      find: jest.fn().mockReturnValue(Promise.resolve(expectOutPutCourses)),
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutPutCourses)),
      remove: jest.fn().mockReturnValue(Promise.resolve(expectOutPutCourses)),
    }

    mockTagRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutPutTags)),
      findOne: jest.fn(),
    }
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should be create a course', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository

    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository

    const courseCreateDTO = {
      name: 'test',
      description: 'test description',
      tags: ['nestjs'],
    }

    const newCourse = await service.create(courseCreateDTO)
    expect(mockCourseRepository.save).toHaveBeenCalled()
    expect(expectOutPutCourses).toStrictEqual(newCourse)
  })

  it('should list all courses', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository

    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository

    const courses = await service.findAll()

    expect(mockCourseRepository.find).toHaveBeenCalled()
    expect(expectOutPutCourses).toStrictEqual(courses)
  })

  it('should list one course', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository

    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository

    const course = await service.findOne(id)

    expect(mockCourseRepository.findOne).toHaveBeenCalled()
    expect(expectOutPutCourses).toStrictEqual(course)
  })

  it('should update a course', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository

    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository

    const updateCourseDTO = {
      name: 'test',
      description: 'test description',
      tags: ['nestjs'],
    }

    const course = await service.update(id, updateCourseDTO)

    expect(mockCourseRepository.save).toHaveBeenCalled()
    expect(mockCourseRepository.preload).toHaveBeenCalled()
    expect(expectOutPutCourses).toStrictEqual(course)
  })

  it('should remove a course', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository

    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository

    const course = await service.remove(id)

    expect(mockCourseRepository.findOne).toHaveBeenCalled()
    expect(mockCourseRepository.remove).toHaveBeenCalled()
    expect(expectOutPutCourses).toStrictEqual(course)
  })
})
