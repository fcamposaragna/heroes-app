import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRoute"

export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>

        <AppRouter />
        
      </AuthProvider>
    </>
  )
}
