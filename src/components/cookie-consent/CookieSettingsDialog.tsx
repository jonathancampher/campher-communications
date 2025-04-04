
import { CookiePreferencesForm } from './CookiePreferencesForm';
import { CookiePreferences } from './types';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter
} from '@/components/ui/sheet';

interface CookieSettingsDialogProps {
  open: boolean;
  preferences: CookiePreferences;
  onOpenChange: (open: boolean) => void;
  onPreferencesChange: (preferences: CookiePreferences) => void;
  onSave: () => void;
}

export const CookieSettingsDialog = ({
  open,
  preferences,
  onOpenChange,
  onPreferencesChange,
  onSave
}: CookieSettingsDialogProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="overflow-y-auto w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Cookie innstillinger</SheetTitle>
          <SheetDescription>
            Velg hvilke informasjonskapsler du vil akseptere. Nødvendige cookies kan ikke deaktiveres.
          </SheetDescription>
        </SheetHeader>
        
        <CookiePreferencesForm 
          preferences={preferences} 
          onChange={onPreferencesChange} 
        />
        
        <SheetFooter className="flex flex-col sm:flex-row gap-2">
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)}
            className="w-full sm:w-auto"
          >
            Avbryt
          </Button>
          <Button 
            onClick={onSave}
            className="w-full sm:w-auto bg-campher-blue hover:bg-blue-700 active:bg-blue-800 active:scale-[0.98] transition-transform"
          >
            Lagre innstillinger
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
