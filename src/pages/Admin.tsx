import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Activity,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Droplets,
  ChevronRight,
  Clock,
  CheckCircle,
  Mail,
  Phone,
  Eye,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactSubmission {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  service: string;
  message: string | null;
  status: string;
  created_at: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    read: 0,
    replied: 0,
  });

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        if (!session?.user) {
          navigate("/auth");
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (!session?.user) {
        navigate("/auth");
      }
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (user) {
      fetchSubmissions();
    }
  }, [user]);

  const fetchSubmissions = async () => {
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching submissions:", error);
      return;
    }

    if (data) {
      setSubmissions(data);
      setStats({
        total: data.length,
        new: data.filter((s) => s.status === "new").length,
        read: data.filter((s) => s.status === "read").length,
        replied: data.filter((s) => s.status === "replied").length,
      });
    }
  };

  const updateSubmissionStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("contact_submissions")
      .update({ status })
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Status Updated",
      description: `Submission marked as ${status}`,
    });

    fetchSubmissions();
    if (selectedSubmission?.id === id) {
      setSelectedSubmission({ ...selectedSubmission, status });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="w-8 h-8 border-3 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const navItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "submissions", icon: MessageSquare, label: "Submissions" },
    { id: "activity", icon: Activity, label: "Activity" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-card border-r border-border transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-primary">
                  ProFlow
                </span>
                <span className="font-display font-bold text-lg text-accent">
                  Admin
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                  activeTab === item.id
                    ? "bg-accent text-white font-semibold"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
                {item.id === "submissions" && stats.new > 0 && (
                  <span className="ml-auto px-2 py-0.5 bg-white/20 rounded-full text-xs font-bold">
                    {stats.new}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
              <div className="w-10 h-10 rounded-full gradient-premium flex items-center justify-center text-white font-bold">
                {user?.email?.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">
                  {user?.email}
                </p>
                <p className="text-xs text-muted-foreground">Administrator</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all"
            >
              <LogOut className="w-4 h-4" />
              Log Out
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-card/95 backdrop-blur-sm border-b border-border p-4 flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="font-display font-bold text-xl text-foreground">
            {navItems.find((i) => i.id === activeTab)?.label}
          </h1>
          <div className="ml-auto flex items-center gap-3">
            <button className="relative p-2 rounded-xl hover:bg-muted transition-colors">
              <Bell className="w-5 h-5 text-muted-foreground" />
              {stats.new > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
              )}
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                  title="Total Submissions"
                  value={stats.total}
                  icon={MessageSquare}
                  color="primary"
                />
                <StatCard
                  title="New Requests"
                  value={stats.new}
                  icon={Clock}
                  color="accent"
                />
                <StatCard
                  title="Read"
                  value={stats.read}
                  icon={Eye}
                  color="primary"
                />
                <StatCard
                  title="Replied"
                  value={stats.replied}
                  icon={CheckCircle}
                  color="success"
                />
              </div>

              {/* Recent Submissions */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display font-bold text-lg text-foreground">
                    Recent Submissions
                  </h2>
                  <button
                    onClick={() => setActiveTab("submissions")}
                    className="text-sm text-accent hover:underline flex items-center gap-1"
                  >
                    View All
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  {submissions.slice(0, 5).map((submission) => (
                    <SubmissionRow
                      key={submission.id}
                      submission={submission}
                      onClick={() => {
                        setSelectedSubmission(submission);
                        setActiveTab("submissions");
                      }}
                    />
                  ))}
                  {submissions.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">
                      No submissions yet
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === "submissions" && (
            <div className="grid lg:grid-cols-2 gap-6">
              {/* List */}
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="p-4 border-b border-border">
                  <h2 className="font-display font-bold text-lg text-foreground">
                    All Submissions
                  </h2>
                </div>
                <div className="max-h-[600px] overflow-auto">
                  {submissions.map((submission) => (
                    <SubmissionRow
                      key={submission.id}
                      submission={submission}
                      isSelected={selectedSubmission?.id === submission.id}
                      onClick={() => setSelectedSubmission(submission)}
                    />
                  ))}
                  {submissions.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">
                      No submissions yet
                    </p>
                  )}
                </div>
              </div>

              {/* Detail */}
              <div className="bg-card rounded-2xl border border-border p-6">
                {selectedSubmission ? (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="font-display font-bold text-xl text-foreground">
                          {selectedSubmission.name}
                        </h2>
                        <p className="text-muted-foreground text-sm">
                          {formatDate(selectedSubmission.created_at)}
                        </p>
                      </div>
                      <StatusBadge status={selectedSubmission.status} />
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                        <Phone className="w-5 h-5 text-accent" />
                        <div>
                          <p className="text-xs text-muted-foreground">Phone</p>
                          <p className="font-semibold text-foreground">
                            {selectedSubmission.phone}
                          </p>
                        </div>
                      </div>
                      {selectedSubmission.email && (
                        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                          <Mail className="w-5 h-5 text-accent" />
                          <div>
                            <p className="text-xs text-muted-foreground">Email</p>
                            <p className="font-semibold text-foreground">
                              {selectedSubmission.email}
                            </p>
                          </div>
                        </div>
                      )}
                      <div className="p-4 bg-muted/50 rounded-xl">
                        <p className="text-xs text-muted-foreground mb-1">
                          Service Requested
                        </p>
                        <p className="font-semibold text-foreground">
                          {selectedSubmission.service}
                        </p>
                      </div>
                      {selectedSubmission.message && (
                        <div className="p-4 bg-muted/50 rounded-xl">
                          <p className="text-xs text-muted-foreground mb-1">
                            Message
                          </p>
                          <p className="text-foreground">
                            {selectedSubmission.message}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() =>
                          updateSubmissionStatus(selectedSubmission.id, "read")
                        }
                        className="flex-1 py-3 rounded-xl border border-border hover:bg-muted transition-colors font-medium"
                      >
                        Mark as Read
                      </button>
                      <button
                        onClick={() =>
                          updateSubmissionStatus(selectedSubmission.id, "replied")
                        }
                        className="flex-1 py-3 rounded-xl gradient-accent text-white font-semibold hover:opacity-90 transition-opacity"
                      >
                        Mark as Replied
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-muted-foreground">
                    Select a submission to view details
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "activity" && (
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="font-display font-bold text-lg text-foreground mb-4">
                Activity Log
              </h2>
              <p className="text-muted-foreground">
                Activity logging coming soon...
              </p>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="font-display font-bold text-lg text-foreground mb-4">
                Settings
              </h2>
              <p className="text-muted-foreground">
                Settings panel coming soon...
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

const StatCard = ({
  title,
  value,
  icon: Icon,
  color,
}: {
  title: string;
  value: number;
  icon: any;
  color: "primary" | "accent" | "success";
}) => (
  <div className="bg-card rounded-2xl border border-border p-6">
    <div className="flex items-center justify-between mb-4">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
          color === "accent"
            ? "bg-accent/10"
            : color === "success"
            ? "bg-success/10"
            : "bg-primary/10"
        }`}
      >
        <Icon
          className={`w-6 h-6 ${
            color === "accent"
              ? "text-accent"
              : color === "success"
              ? "text-success"
              : "text-primary"
          }`}
        />
      </div>
    </div>
    <p className="text-3xl font-display font-bold text-foreground mb-1">
      {value}
    </p>
    <p className="text-muted-foreground text-sm">{title}</p>
  </div>
);

const SubmissionRow = ({
  submission,
  onClick,
  isSelected,
}: {
  submission: ContactSubmission;
  onClick: () => void;
  isSelected?: boolean;
}) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-4 p-4 text-left hover:bg-muted/50 transition-colors border-b border-border last:border-0 ${
      isSelected ? "bg-accent/5" : ""
    }`}
  >
    <div
      className={`w-2 h-2 rounded-full ${
        submission.status === "new" ? "bg-accent" : "bg-muted-foreground/30"
      }`}
    />
    <div className="flex-1 min-w-0">
      <p className="font-semibold text-foreground truncate">{submission.name}</p>
      <p className="text-sm text-muted-foreground truncate">
        {submission.service}
      </p>
    </div>
    <StatusBadge status={submission.status} />
  </button>
);

const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    new: "bg-accent/10 text-accent",
    read: "bg-primary/10 text-primary",
    replied: "bg-success/10 text-success",
    archived: "bg-muted text-muted-foreground",
  };

  return (
    <span
      className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${
        styles[status] || styles.new
      }`}
    >
      {status}
    </span>
  );
};

export default Admin;