import { Student } from '../../enterprise/entities/student'

export abstract class StudentsRepository {
  abstract findByEmail(Email: string): Promise<Student | null>
  abstract create(student: Student): Promise<void>
}
