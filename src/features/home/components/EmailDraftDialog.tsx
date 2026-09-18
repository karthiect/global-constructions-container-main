import { useEffect, useId, useRef } from 'react';
import { Button } from '../../../components/ui/Button';
import { buildContactDraft } from '../../../helpers/contactDraft';

interface Props {
  links: ReturnType<typeof buildContactDraft>;
  onClose: () => void;
}

export function EmailDraftDialog({ links, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current!;
    const trigger = document.activeElement as HTMLElement | null;
    dialog.showModal();
    return () => {
      dialog.close();
      trigger?.focus();
    };
  }, []);

  const linkClass = 'block rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-bold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ef7e39]';

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      className="fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-lg max-h-[90dvh] overflow-y-auto rounded-3xl border border-white/20 bg-[#1C2E57] p-6 text-white shadow-2xl backdrop:bg-black/60 sm:p-8"
    >
      <h2 id={titleId} className="text-2xl font-bold">Your email draft is ready</h2>
      <p id={descriptionId} className="mt-3 text-sm leading-relaxed text-white/70">
        Choose where to open your draft. Review it and send it from your email account.
      </p>
      <div className="mt-6 space-y-3">
        <a autoFocus href={links.mailto} className={`${linkClass} bg-gold-gradient`}>Open Default Email </a>
        <a href={links.gmail} target="_blank" rel="noopener noreferrer" className={linkClass}>Open With Gmail</a>
        <a href={links.outlook} target="_blank" rel="noopener noreferrer" className={linkClass}>Open With Outlook </a>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-white/60">
        Gmail and Outlook Web open in a new tab and may require sign-in. If your draft does not open, try another option above. Your form details stay here.
      </p>
      <Button type="button" variant="outline" onClick={onClose} className="mt-6 w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ef7e39]">Cancel</Button>
    </dialog>
  );
}
