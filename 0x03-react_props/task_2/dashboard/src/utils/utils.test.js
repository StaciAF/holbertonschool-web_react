import { getFooterCopy, getFullYear, getLatestNotification } from './utils'

test('check getFooterCopy boolean return true string value', () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
})
test('check getFooterCopy boolean return false string value', () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
})

test('check getFullYear return value is current year', () => {
    expect(getFullYear().toString()).toBe("2021");
})

test('check getLatestNotification return value', () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD")
})