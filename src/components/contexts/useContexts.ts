import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { AuthorContext } from "./AuthorContext";

export function useAuthor() {
  const context = useContext(AuthorContext);

  if (context === undefined)
    throw new Error(
      "Author context was used outside of Author context Provider"
    );

  return context;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("Auth context was used outside of Auth context Provider");

  return context;
}
