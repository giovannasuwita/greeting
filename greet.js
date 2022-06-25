function Greet (name)
{
    if (name = null)
    {
        return "Hello there!"
    }

    else if (name == name.toUpperCase())
    {
        return "HELLO" + name 
    }

    else if (Array.isArray(name)=true)
    {
        return "Hello" + name.slice(0,name.length)
    }

    else
    {
        return (`Hello ${name}!`)
    }
}
