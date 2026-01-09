"use client";

import { useState, useMemo } from "react";
import {
  MapPin,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { useConvexMutation } from "@/hooks/use-convex-query";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { State, City } from "country-state-city";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CATEGORIES } from "@/lib/data";

export default function OnboardingModal({ isOpen, onClose, onComplete }) {
  const [step, setStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [location, setLocation] = useState({
    state: "",
    city: "",
    country: "India",
  });

  const { mutate: completeOnboarding, isLoading } = useConvexMutation(
    api.users.completeOnboarding
  );

  const indianStates = useMemo(() => State.getStatesOfCountry("IN"), []);

  const cities = useMemo(() => {
    if (!location.state) return [];
    const state = indianStates.find((s) => s.name === location.state);
    return state ? City.getCitiesOfState("IN", state.isoCode) : [];
  }, [location.state, indianStates]);

  const toggleInterest = (id) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    if (step === 1 && selectedInterests.length < 3) {
      toast.error("Pick at least 3 interests to continue");
      return;
    }
    if (step === 2 && (!location.state || !location.city)) {
      toast.error("Please select your state and city");
      return;
    }
    step < 2 ? setStep(step + 1) : handleComplete();
  };

  const handleComplete = async () => {
    try {
      await completeOnboarding({
        interests: selectedInterests,
        location,
      });
      toast.success("You're all set 🚀");
      onComplete();
    } catch {
      toast.error("Something went wrong");
    }
  };

  const progress = (step / 2) * 100;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl border border-blue-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <DialogHeader>
          <Progress value={progress} className="h-1 mb-4" />

          <DialogTitle className="flex items-center gap-2 text-2xl">
            {step === 1 ? (
              <>
                <Sparkles className="w-6 h-6 text-cyan-400" />
                Personalize your experience
              </>
            ) : (
              <>
                <MapPin className="w-6 h-6 text-cyan-400" />
                Choose your location
              </>
            )}
          </DialogTitle>

          <DialogDescription className="text-muted-foreground">
            {step === 1
              ? "Tell us what you’re interested in. This helps us recommend better events."
              : "We’ll show you events happening around you."}
          </DialogDescription>
        </DialogHeader>

        {/* CONTENT */}
        <div className="py-6">
          {/* STEP 1 */}
          {step === 1 && (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[380px] overflow-y-auto">
                {CATEGORIES.map((cat) => {
                  const active = selectedInterests.includes(cat.id);
                  return (
                    <button
                      key={cat.id}
                      onClick={() => toggleInterest(cat.id)}
                      className={`relative p-4 rounded-xl border transition-all text-left
                        ${
                          active
                            ? "border-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                            : "border-border hover:border-cyan-400/50"
                        }`}
                    >
                      <div className="text-2xl mb-2">{cat.icon}</div>
                      <div className="font-medium">{cat.label}</div>

                      {active && (
                        <CheckCircle2 className="absolute top-2 right-2 w-5 h-5 text-cyan-400" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 flex items-center gap-2">
                <Badge
                  variant={
                    selectedInterests.length >= 3 ? "default" : "secondary"
                  }
                >
                  {selectedInterests.length} selected
                </Badge>
                {selectedInterests.length >= 3 && (
                  <span className="text-sm text-cyan-400">
                    Looks good ✨
                  </span>
                )}
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>State</Label>
                  <Select
                    value={location.state}
                    onValueChange={(v) =>
                      setLocation({ ...location, state: v, city: "" })
                    }
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {indianStates.map((s) => (
                        <SelectItem key={s.isoCode} value={s.name}>
                          {s.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>City</Label>
                  <Select
                    value={location.city}
                    disabled={!location.state}
                    onValueChange={(v) =>
                      setLocation({ ...location, city: v })
                    }
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue
                        placeholder={
                          location.state ? "Select city" : "Select state first"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((c) => (
                        <SelectItem key={c.name} value={c.name}>
                          {c.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {location.city && location.state && (
                <div className="rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-4">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                    <div>
                      <p className="font-medium">Selected location</p>
                      <p className="text-sm text-muted-foreground">
                        {location.city}, {location.state}, India
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3 pt-4">
          {step > 1 && (
            <Button variant="outline" onClick={() => setStep(step - 1)}>
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back
            </Button>
          )}
          <Button
            onClick={handleNext}
            disabled={isLoading}
            className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold"
          >
            {isLoading
              ? "Saving..."
              : step === 2
              ? "Finish setup"
              : "Continue"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
