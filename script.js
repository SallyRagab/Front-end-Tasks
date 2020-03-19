var promise = 
const f = (firstName) => {
  setTimeout(() => {
    if (!firstName) return new Error('firstName is required')
    const fullName = `${firstName} Smith`
    return callback(fullName)
  }, 2000)
}

f('Andrew', console.log)
f(null, console.log)
