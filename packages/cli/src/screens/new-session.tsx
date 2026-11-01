import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { BotMessage, ErrorMessage, UserMessage } from "../components/messages";
import { Session } from "./session";
import { SessionShell } from "../components/session-shell";

export function NewSession() {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as { message?: string } | null;

  useEffect(() => {
    if (!state?.message) {
      navigate("/", { replace: true });
    }
  }, [state?.message]);

  if (!state?.message) return null;

  return (
    <SessionShell onSubmit={() => {}} inputDisabled loading>
      <UserMessage message={state.message} />
      <BotMessage
        content="This is a sample bot response to demonstrate the message layout"
        model="opus-4-6"
      />
      <ErrorMessage message="This is a sample error message." />
    </SessionShell>
  );
}
