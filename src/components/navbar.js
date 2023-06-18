import logo from "images/logo.svg"

function navbar() {
  return (
    <nav class="bg-primary border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={logo} alt="logo" class="h-8 mr-3"/>
        
      </div>
    </nav>
  )
}

export default navbar;