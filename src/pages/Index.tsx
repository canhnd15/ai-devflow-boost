import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, GitBranch, TestTube, Users, CheckCircle, AlertTriangle, Zap, Menu, ChevronRight } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsNavOpen(false);
    }
  };

  const navigationItems = [
    { id: 'context', title: 'Bối cảnh dự án', icon: Users },
    { id: 'demo-process', title: 'Quy trình demo', icon: GitBranch },
    { id: 'conclusion', title: 'Kết luận', icon: CheckCircle },
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
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Tối ưu Quy trình Phát triển
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Case Study: Áp dụng AI Agent để tự động hóa quy trình phát triển tính năng giỏ hàng 
            cho ứng dụng quản lý đặt đồ ăn tại Mitec
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Newwave Solutions</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>Mitec Food Ordering System</span>
            </div>
          </div>
          
          {/* Team Information */}
          <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10">
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Team Early Birds</h3>
              <p className="text-sm text-muted-foreground italic">
                "Chủ động, nhanh nhạy, sáng tạo, không ngại khó.<br />
                Sẵn sàng học hỏi, chinh phục mọi dự án."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bối cảnh Section */}
      <section id="context" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Bối cảnh Dự án</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thách thức trong việc quản lý nguồn lực hạn chế và nhu cầu tối ưu quy trình phát triển
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-none shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <AlertTriangle className="w-5 h-5" />
                  Thách thức
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Quản lý phức tạp:</strong> Hệ thống tem phiếu khó nắm được doanh thu chính xác
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Nguồn lực hạn chế:</strong> 2 developers + 1 QA/BA cho toàn bộ dự án
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Áp lực thời gian:</strong> Cần phát triển nhanh với chất lượng cao
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-success">
                  <CheckCircle className="w-5 h-5" />
                  Giải pháp AI Agent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Áp dụng AI Agent để tự động hóa các bước trong quy trình phát triển:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-secondary/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">3</div>
                      <div className="text-xs text-muted-foreground">AI Agents</div>
                    </div>
                    <div className="text-center p-3 bg-secondary/50 rounded-lg">
                      <div className="text-2xl font-bold text-accent">80%</div>
                      <div className="text-xs text-muted-foreground">Tự động hóa</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-soft bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-center">Cấu trúc Team</h3>
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
                    <TestTube className="w-6 h-6 text-success" />
                  </div>
                  <h4 className="font-medium mb-2">QA kiêm BA</h4>
                  <p className="text-sm text-muted-foreground">100% effort</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Demo Steps Section */}
      <section id="demo-process" className="py-16 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Quy trình Demo với AI Agent</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              5 bước tự động hóa từ viết test case đến automation testing
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                1
              </div>
              <Card className="flex-1 border-none shadow-soft group-hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <TestTube className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold">QA Agent 1: Tự động viết Test Case</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Dựa trên specification từ BA, AI agent tự động sinh ra test case chi tiết và lưu thành file
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="secondary">Input: BA Spec</Badge>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <Badge variant="outline">Output: Test Cases File</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg">
                2
              </div>
              <Card className="flex-1 border-none shadow-soft group-hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <GitBranch className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-semibold">Dev Agent: Code Review tự động</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Sau khi developer tạo PR, AI agent thực hiện review code ở 2 chế độ và gửi thông báo
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Dev Agent 1</h4>
                      <p className="text-xs text-muted-foreground">Review overview toàn bộ PR</p>
                    </div>
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Dev Agent 2</h4>
                      <p className="text-xs text-muted-foreground">Review line-by-line chi tiết</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 bg-success rounded-full flex items-center justify-center text-success-foreground font-bold text-lg">
                3
              </div>
              <Card className="flex-1 border-none shadow-soft group-hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Code className="w-5 h-5 text-success" />
                    <h3 className="text-lg font-semibold">Dev Agent 3: Viết Unit Test</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Tự động sinh unit test dựa trên code đã được review để đảm bảo coverage tốt
                  </p>
                  <Badge variant="secondary">Automated Unit Test Generation</Badge>
                </CardContent>
              </Card>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 bg-warning rounded-full flex items-center justify-center text-warning-foreground font-bold text-lg">
                4
              </div>
              <Card className="flex-1 border-none shadow-soft group-hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-warning" />
                    <h3 className="text-lg font-semibold">Senior Dev: Merge & Deploy</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Senior developer thực hiện merge code và deploy, hệ thống tự động thông báo kết quả
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Thông báo QA (deploy success)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full"></div>
                      <span>Thông báo Dev (deploy fail)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 5 */}
            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                5
              </div>
              <Card className="flex-1 border-none shadow-soft group-hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold">QA Agent 2: Automation Testing</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Dựa trên test case từ bước 1, tự động chạy automation test để kiểm tra tính năng
                  </p>
                  <Badge variant="outline">n8n Workflow Integration</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Kết luận Section */}
      <section id="conclusion" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Kết luận</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Đánh giá ưu điểm và những hạn chế cần khắc phục khi áp dụng AI Agent
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
                      <strong>Tăng hiệu quả:</strong> Giảm 80% thời gian cho các tác vụ lặp lại
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Tối ưu nguồn lực:</strong> Team nhỏ có thể đảm nhiệm dự án lớn hơn
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Chất lượng ổn định:</strong> Giảm human error, đảm bảo consistency
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Phản hồi nhanh:</strong> Notification tự động và real-time
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
                      <strong>Dependency:</strong> Phụ thuộc vào chất lượng của AI model
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Setup phức tạp:</strong> Cần thời gian để config và fine-tune
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Monitoring:</strong> Cần giám sát để đảm bảo output quality
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
            <Card className="border-none shadow-medium bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Tính năng đang phát triển</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  <strong>Giỏ hàng (Shopping Cart)</strong> - Cho phép người dùng chọn và đặt món ăn
                </p>
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span>n8n Workflow</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span>5 AI Agents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span>Automation Testing</span>
                  </div>
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