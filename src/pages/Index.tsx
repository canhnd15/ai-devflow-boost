import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  GitBranch,
  TestTube,
  Users,
  CheckCircle,
  AlertTriangle,
  Zap,
  Menu,
  ChevronRight,
  TestTube2,
  BugIcon,
  BugOffIcon,
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsNavOpen(false);
    }
  };

  const navigationItems = [
    { id: "context", title: "Bối cảnh dự án", icon: Users },
    { id: "demo-process", title: "Quy trình demo", icon: GitBranch },
    { id: "conclusion", title: "Kết luận", icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Floating Navigation */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="mb-2 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
          >
            <Menu className="w-4 h-4" />
          </Button>

          {isNavOpen && (
            <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg p-2 shadow-lg">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center justify-start w-full mb-1 text-xs hover:bg-primary/10"
                >
                  <item.icon className="w-3 h-3 mr-2" />
                  <span className="whitespace-nowrap">{item.title}</span>
                  <ChevronRight className="w-3 h-3 ml-2" />
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            <Zap className="w-4 h-4 mr-2" />
            Ứng dụng AI Agent trong Phát triển Phần mềm
          </Badge>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            AI AGENT CÓ THỂ VIẾT CODE, VIẾT TEST, REVIEW CODE?
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Ứng dụng AI để tự động hóa, tối ưu quy trình và nguồn lực trong các
            dự án phần mềm.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Newwave Solutions</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>Mitec Eat Easy</span>
            </div>
          </div>

          {/* Team Information */}
          <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-primary mb-2">
                Team Early Birds
              </h3>
              <p className="text-sm text-muted-foreground italic">
                "Chủ động, nhanh nhạy, sáng tạo, không ngại khó.
                <br />
                Sẵn sàng học hỏi, chinh phục mọi dự án."
              </p>
            </div>

            {/* Team Members */}
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="text-center p-3 bg-white/50 rounded-lg border border-primary/10">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-medium text-sm text-primary">
                  Nguyễn Đức Cảnh
                </h4>
                <p className="text-xs text-muted-foreground">
                  Leader - DEV BU10
                </p>
              </div>
              <div className="text-center p-3 bg-white/50 rounded-lg border border-accent/10">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Code className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-medium text-sm text-accent">Võ Ngọc Lân</h4>
                <p className="text-xs text-muted-foreground">DEV BU10</p>
              </div>
              <div className="text-center p-3 bg-white/50 rounded-lg border border-success/10">
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Code className="w-5 h-5 text-success" />
                </div>
                <h4 className="font-medium text-sm text-success">
                  Nguyễn Bá Thức
                </h4>
                <p className="text-xs text-muted-foreground">DEV BU10</p>
              </div>
              <div className="text-center p-3 bg-white/50 rounded-lg border border-warning/10">
                <div className="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <BugOffIcon className="w-5 h-5 text-warning" />
                </div>
                <h4 className="font-medium text-sm text-warning">
                  Nguyễn Thị Tỉnh
                </h4>
                <p className="text-xs text-muted-foreground">EQA BU10</p>
              </div>
              <div className="text-center p-3 bg-white/50 rounded-lg border border-destructive/10">
                <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <BugOffIcon className="w-5 h-5 text-destructive" />
                </div>
                <h4 className="font-medium text-sm text-destructive">
                  Hoàng Đức Dũng
                </h4>
                <p className="text-xs text-muted-foreground">EQA BU10</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bối cảnh Section */}
      <section id="context" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Bối cảnh Dự án Demo
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Do quản lý bằng tem phiếu phức tạp, khó nắm được doanh thu nên nhà
              ăn Mitec hợp đồng với Newwave Solutions để xây một ứng dụng hỗ trợ
              quản lý việc đặt đồ ăn cho nhân viên, cán bộ các công ty trong và
              ngoài tòa nhà Mitec.
            </p>
          </div>

          <Card className="border-none shadow-soft bg-gradient-to-r from-primary/5 to-accent/5 mb-10">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Cấu trúc team (giả định)
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">Senior Fullstack</h4>
                  <p className="text-sm text-muted-foreground">50% effort</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-medium mb-2">Fresher Frontend</h4>
                  <p className="text-sm text-muted-foreground">100% effort</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BugOffIcon className="w-6 h-6 text-success" />
                  </div>
                  <h4 className="font-medium mb-2">QA kiêm BA</h4>
                  <p className="text-sm text-muted-foreground">100% effort</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-none shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <AlertTriangle className="w-5 h-5" />
                  Thách thức với team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Nguồn lực hạn chế:</strong> 2 developers + 1 QA/BA
                      cho toàn bộ dự án
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Áp lực thời gian:</strong> Cần phát triển nhanh
                      với chất lượng cao
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Nghiệp vu:</strong> Khó khăn trong thống nhất và
                      làm rõ yêu cầu của khách hàng
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-success">
                  <CheckCircle className="w-5 h-5" />
                  Giải pháp với sự hỗ trợ của AI Agent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Áp dụng AI Agent để tự động hóa các bước trong quy trình
                    phát triển:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-secondary/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">5</div>
                      <div className="text-xs text-muted-foreground">
                        AI Agents
                      </div>
                    </div>
                    <div className="text-center p-3 bg-secondary/50 rounded-lg">
                      <div className="text-2xl font-bold text-accent">
                        50% - 60%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Tự động hóa
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Steps Section */}
      <section
        id="demo-process"
        className="py-16 px-6 bg-gradient-to-br from-secondary/30 via-accent/10 to-primary/10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Quy trình Demo với AI Agent
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              5 bước tự động hóa từ viết test case đến automation testing
            </p>
          </div>

          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute left-1/2 top-20 bottom-20 w-1 bg-gradient-to-b from-primary via-accent to-success transform -translate-x-1/2 hidden lg:block opacity-30"></div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex items-center gap-8 group lg:flex-row flex-col">
                <div className="lg:w-1/2 lg:text-right">
                  <Card className="border-none shadow-medium group-hover:shadow-large transition-all duration-500 bg-gradient-to-br from-primary/5 to-primary/10 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3 lg:justify-end justify-center">
                        <TestTube className="w-6 h-6 text-primary animate-pulse" />
                        <h3 className="text-lg font-semibold text-primary">
                          QA Agent 1: Tự động viết Test Case
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Dựa trên specification từ BA, AI agent tự động sinh ra
                        test case chi tiết và lưu thành file
                      </p>
                      <div className="flex items-center gap-2 text-sm lg:justify-end justify-center">
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          Input: BA Spec
                        </Badge>
                        <ArrowRight className="w-4 h-4 text-primary" />
                        <Badge variant="outline" className="border-primary/30">
                          Output: Test Cases File
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-primary/20 z-10">
                  1
                </div>
                <div className="lg:w-1/2 lg:block hidden"></div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-8 group lg:flex-row flex-col">
                <div className="lg:w-1/2 lg:block hidden"></div>
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-accent/20 z-10">
                  2
                </div>
                <div className="lg:w-1/2">
                  <Card className="border-none shadow-medium group-hover:shadow-large transition-all duration-500 bg-gradient-to-br from-accent/5 to-accent/10 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <GitBranch className="w-6 h-6 text-accent animate-pulse" />
                        <h3 className="text-lg font-semibold text-accent">
                          Dev Agent: Code Review tự động
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Sau khi developer tạo PR, AI agent thực hiện review code
                        ở 2 chế độ và gửi thông báo
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                          <h4 className="font-medium text-sm mb-2 text-accent">
                            Dev Agent 1
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            Review overview toàn bộ PR
                          </p>
                        </div>
                        <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                          <h4 className="font-medium text-sm mb-2 text-accent">
                            Dev Agent 2
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            Review line-by-line chi tiết
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-8 group lg:flex-row flex-col">
                <div className="lg:w-1/2 lg:text-right">
                  <Card className="border-none shadow-medium group-hover:shadow-large transition-all duration-500 bg-gradient-to-br from-success/5 to-success/10 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3 lg:justify-end justify-center">
                        <Code className="w-6 h-6 text-success animate-pulse" />
                        <h3 className="text-lg font-semibold text-success">
                          Dev Agent 3: Viết Unit Test
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Tự động sinh unit test dựa trên code đã được review để
                        đảm bảo coverage tốt
                      </p>
                      <div className="lg:text-right text-center">
                        <Badge
                          variant="secondary"
                          className="bg-success/10 text-success border-success/20"
                        >
                          Automated Unit Test Generation
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-success to-success/70 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-success/20 z-10">
                  3
                </div>
                <div className="lg:w-1/2 lg:block hidden"></div>
              </div>

              {/* Step 4 */}
              <div className="flex items-center gap-8 group lg:flex-row flex-col">
                <div className="lg:w-1/2 lg:block hidden"></div>
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-warning to-warning/70 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-warning/20 z-10">
                  4
                </div>
                <div className="lg:w-1/2">
                  <Card className="border-none shadow-medium group-hover:shadow-large transition-all duration-500 bg-gradient-to-br from-warning/5 to-warning/10 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <CheckCircle className="w-6 h-6 text-warning animate-pulse" />
                        <h3 className="text-lg font-semibold text-warning">
                          Senior Dev: Merge & Deploy
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Senior developer thực hiện merge code và deploy, hệ
                        thống tự động thông báo kết quả
                      </p>
                      <div className="flex items-center gap-4 text-sm flex-wrap">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                          <span>Thông báo QA (deploy success)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
                          <span>Thông báo Dev (deploy fail)</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-center gap-8 group lg:flex-row flex-col">
                <div className="lg:w-1/2 lg:text-right">
                  <Card className="border-none shadow-medium group-hover:shadow-large transition-all duration-500 bg-gradient-to-br from-primary/5 to-accent/5 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3 lg:justify-end justify-center">
                        <Zap className="w-6 h-6 text-primary animate-pulse" />
                        <h3 className="text-lg font-semibold text-primary">
                          QA Agent 2: Automation Testing
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Dựa trên test case từ bước 1, tự động chạy automation
                        test để kiểm tra tính năng
                      </p>
                      <div className="lg:text-right text-center">
                        <Badge variant="outline" className="border-primary/30">
                          n8n Workflow Integration
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-primary/20 z-10">
                  5
                </div>
                <div className="lg:w-1/2 lg:block hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kết luận Section */}
      <section id="conclusion" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Kết luận
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Đánh giá ưu điểm và những hạn chế cần khắc phục khi áp dụng AI
              Agent
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-soft bg-gradient-to-br from-success/5 to-success/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-success">
                  <CheckCircle className="w-5 h-5" />
                  Ưu điểm
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Tăng hiệu quả:</strong> Giảm 80% thời gian cho các
                      tác vụ lặp lại
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Tối ưu nguồn lực:</strong> Team nhỏ có thể đảm
                      nhiệm dự án lớn hơn
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Chất lượng ổn định:</strong> Giảm human error, đảm
                      bảo consistency
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Phản hồi nhanh:</strong> Notification tự động và
                      real-time
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft bg-gradient-to-br from-warning/5 to-warning/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-warning">
                  <AlertTriangle className="w-5 h-5" />
                  Hạn chế cần khắc phục
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Dependency:</strong> Phụ thuộc vào chất lượng của
                      AI model
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Setup phức tạp:</strong> Cần thời gian để config
                      và fine-tune
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Monitoring:</strong> Cần giám sát để đảm bảo
                      output quality
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Cost:</strong> Chi phí API calls và infrastructure
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="border-none shadow-large bg-gradient-to-r from-primary/10 via-accent/10 to-success/10 hover:shadow-glow transition-all duration-500">
              <CardContent className="p-12">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
                    Thanks for Listening!
                  </h3>
                  <p className="text-xl text-muted-foreground mb-8">
                    Cảm ơn các bạn đã lắng nghe về case study áp dụng AI Agent
                    trong phát triển phần mềm
                  </p>
                </div>

                <div className="flex items-center justify-center gap-8 text-lg text-muted-foreground flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                    <span className="font-medium">Team Early Birds</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                    <span className="font-medium">Newwave Solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-success rounded-full animate-pulse"></div>
                    <span className="font-medium">Mitec Eat Easy</span>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-sm text-muted-foreground italic">
                    "Chủ động, nhanh nhạy, sáng tạo, không ngại khó"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
