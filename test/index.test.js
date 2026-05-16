const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe('capitalizeWords', () => {
    test('capitalizes normal words', () => {
        expect(capitalizeWords('hello-world')).toBe('Hello-World')
    })

    test('handles empty string', () => {
        expect(capitalizeWords('')).toBe('')
    })

    test('handles special characters', () => {
        expect(capitalizeWords('hello-world')).toBe('Hello-World')
    })
})

describe('filterActiveUsers', () => {
    test('filters mixed active/inactive users', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: false },
            { name: 'Charlie', isActive: true }
        ]

        expect(filterActiveUsers(users)).toEqual([
            { name: 'Alice', isActive: true },
            { name: 'Charlie', isActive: true }
        ])
    })

    test('returns empty array if all inactive', () => {
        const users = [
            { name: 'Bob', active: false }
        ]

        expect(filterActiveUsers(users)).toEqual([])
    })

    test('handles empty array', () => {
        expect(filterActiveUsers([])).toEqual([])
    })
})

describe('logAction', () => {
    test('generates correct log string for valid inputs', () => {
        const result = logAction('login', 'Alice')

        expect(result).toContain('Alice')
        expect(result).toContain('login')
    })

    test('handles missing action', () => {
        const result = logAction(undefined, 'Alice')

        expect(result).toContain('Alice')
    })

    test('handles missing username', () => {
        const result = logAction('login', undefined)

        expect(result).toContain('login')
    })

    test('handles empty strings', () => {
        const result = logAction('', '')

        expect(result).toContain('')
    })
})