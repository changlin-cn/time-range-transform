import timeRangeTransform from '../src/index'

test('timeRangeTransform 1',()=>{
    expect(timeRangeTransform(1,)).toBe('1秒')
})

test('timeRangeTransform 1.3',()=>{
    expect(timeRangeTransform(1.3,)).toBe('1秒')
})

test('timeRangeTransform 60',()=>{
    expect(timeRangeTransform(60)).toBe('1分钟')
})

test('timeRangeTransform 120',()=>{
    expect(timeRangeTransform(120)).toBe('2分钟')
})

test('timeRangeTransform 121',()=>{
    expect(timeRangeTransform(121)).toBe('2分钟1秒')
})

test('timeRangeTransform 3600',()=>{
    expect(timeRangeTransform(3600)).toBe('1小时')
})

test('timeRangeTransform 3601',()=>{
    expect(timeRangeTransform(3601)).toBe('1小时1秒')
})
test('timeRangeTransform 3661',()=>{
    expect(timeRangeTransform(3661)).toBe('1小时1分钟1秒')
})

test('timeRangeTransform 86400',()=>{
    expect(timeRangeTransform(86400)).toBe('1天')
})

test('timeRangeTransform 86401',()=>{
    expect(timeRangeTransform(86401)).toBe('1天1秒')
})
test('timeRangeTransform 86461',()=>{
    expect(timeRangeTransform(86461)).toBe('1天1分钟1秒')
})
test('timeRangeTransform 90000',()=>{
    expect(timeRangeTransform(90000)).toBe('1天1小时')
})
test('timeRangeTransform 90001',()=>{
    expect(timeRangeTransform(90001)).toBe('1天1小时1秒')
})
test('timeRangeTransform 2592000',()=>{
    expect(timeRangeTransform(2592000)).toBe('1月')
})
test('timeRangeTransform 2592001',()=>{
    expect(timeRangeTransform(2592001)).toBe('1月1秒')
})
test('timeRangeTransform 2592061',()=>{
    expect(timeRangeTransform(2592061)).toBe('1月1分钟1秒')
})
test('timeRangeTransform 31536000',()=>{
    expect(timeRangeTransform(31536000)).toBe('1年')
})
test('timeRangeTransform 31536001',()=>{
    expect(timeRangeTransform(31536001)).toBe('1年1秒')
})
test('timeRangeTransform 31536001',()=>{
    expect(timeRangeTransform(31536001)).toBe('1年1秒')
})

test('timeRangeTransform 34128000',()=>{
    expect(timeRangeTransform(34128000)).toBe('1年1月')
})

test('timeRangeTransform 34300800',()=>{
    expect(timeRangeTransform(34300800)).toBe('1年1月2天')
})
test('timeRangeTransform 34300801',()=>{
    expect(timeRangeTransform(34300801)).toBe('1年1月2天1秒')
})
