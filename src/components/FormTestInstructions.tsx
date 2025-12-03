import { Card } from "@/components/ui/card";
import { CheckCircle2, Mail, MessageCircle, AlertCircle } from "lucide-react";

const FormTestInstructions = () => {
  return (
    <Card className="p-6 bg-muted/50 border-primary/20">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <CheckCircle2 className="h-5 w-5 text-primary" />
        Form Integration Test Instructions
      </h3>
      <div className="space-y-4 text-sm">
        <div className="flex gap-3">
          <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold mb-1">Email Integration (Resend)</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Backend function deployed: <code className="bg-background px-1 rounded">send-inquiry</code></li>
              <li>Resend API key configured in secrets</li>
              <li>Emails sent to: info@gotechpluz.com</li>
              <li>Sender: Gotechpluz &lt;onboarding@resend.dev&gt;</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-3">
          <MessageCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold mb-1">WhatsApp Integration</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Direct WhatsApp number: 0247233996</li>
              <li>Auto-formatted inquiry message</li>
              <li>Opens in new tab after form submission</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold mb-1">Testing Steps</p>
            <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
              <li>Fill out the project inquiry form below</li>
              <li>Submit and verify success toast appears</li>
              <li>Check if WhatsApp opens with pre-filled message</li>
              <li>Verify email received at info@gotechpluz.com (if Resend domain verified)</li>
            </ol>
          </div>
        </div>

        <div className="p-3 bg-background rounded-lg border border-border">
          <p className="text-xs text-muted-foreground">
            <strong>Note:</strong> For Resend emails to work properly, you need to verify your domain at 
            <a href="https://resend.com/domains" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
              resend.com/domains
            </a>. Until then, emails will only send to addresses you've verified in your Resend account.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default FormTestInstructions;
