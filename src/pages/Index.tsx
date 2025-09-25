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
  ChevronLeft,
  ChevronRight,
  TestTube2,
  BugIcon,
  BugOffIcon,
} from "lucide-react";
import { useState } from "react";
import aiNetworkBg from "@/assets/ai-network-bg.jpg";
import aiRobotSilhouette from "@/assets/ai-robot-silhouette.jpg";
import codeMatrixBg from "@/assets/code-matrix-bg.jpg";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const totalPages = 5;

  const flipToPage = (pageIndex: number, direction: 'next' | 'prev' = 'next') => {
    if (isFlipping || pageIndex === currentPage) return;
    
    setIsFlipping(true);
    
    setTimeout(() => {
      setCurrentPage(pageIndex);
    }, 400);
    
    setTimeout(() => {
      setIsFlipping(false);
    }, 800);
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      flipToPage(currentPage + 1, 'next');
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      flipToPage(currentPage - 1, 'prev');
    }
  };

  const pages = [
    // Page 1: Giới thiệu
    <div key="intro" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background relative">
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${aiNetworkBg})` }}
      />
      <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
        <Badge variant="secondary" className="mb-6 text-sm font-medium">
          <Zap className="w-4 h-4 mr-2" />
          Ứng dụng AI Agent trong Phát triển Phần mềm
        </Badge>
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          AI AGENT CÓ THỂ VIẾT CODE, VIẾT TEST, REVIEW CODE?
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Ứng dụng AI để tự động hóa, tối ưu quy trình và nguồn lực trong các
          dự án phần mềm.
        </p>
        <div className="flex items-center justify-center gap-4 text-lg text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>Newwave Solutions</span>
          </div>
          <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            <span>Mitec Eat Easy</span>
          </div>
        </div>

        {/* Team Information */}
        <div className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Team Early Birds
            </h3>
            <p className="text-lg text-muted-foreground italic">
              "Chủ động, nhanh nhạy, sáng tạo, không ngại khó.
              <br />
              Sẵn sàng học hỏi, chinh phục mọi dự án."
            </p>
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="text-center p-4 bg-white/50 rounded-lg border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-medium text-primary">
                Nguyễn Đức Cảnh
              </h4>
              <p className="text-sm text-muted-foreground">
                Leader - DEV BU10
              </p>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg border border-accent/10">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Code className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-medium text-accent">Võ Ngọc Lân</h4>
              <p className="text-sm text-muted-foreground">DEV BU10</p>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg border border-success/10">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Code className="w-6 h-6 text-success" />
              </div>
              <h4 className="font-medium text-success">
                Nguyễn Bá Thức
              </h4>
              <p className="text-sm text-muted-foreground">DEV BU10</p>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg border border-warning/10">
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <BugOffIcon className="w-6 h-6 text-warning" />
              </div>
              <h4 className="font-medium text-warning">
                Nguyễn Thị Tỉnh
              </h4>
              <p className="text-sm text-muted-foreground">EQA BU10</p>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg border border-destructive/10">
              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <BugOffIcon className="w-6 h-6 text-destructive" />
              </div>
              <h4 className="font-medium text-destructive">
                Hoàng Đức Dũng
              </h4>
              <p className="text-sm text-muted-foreground">EQA BU10</p>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Page 2: Bối cảnh dự án
    <div key="context" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/30 via-accent/10 to-primary/10 relative">
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${aiRobotSilhouette})` }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Bối cảnh Dự án Demo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Do quản lý bằng tem phiếu phức tạp, khó nắm được doanh thu nên nhà
            ăn Mitec hợp đồng với Newwave Solutions để xây một ứng dụng hỗ trợ
            quản lý việc đặt đồ ăn cho nhân viên, cán bộ các công ty trong và
            ngoài tòa nhà Mitec.
          </p>
        </div>

        <Card className="border-none shadow-soft bg-gradient-to-r from-primary/5 to-accent/5 mb-12">
          <CardContent className="p-10">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Cấu trúc team (giả định)
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-medium mb-3 text-lg">Senior Fullstack</h4>
                <p className="text-muted-foreground">50% effort</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-medium mb-3 text-lg">Fresher Frontend</h4>
                <p className="text-muted-foreground">100% effort</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BugOffIcon className="w-8 h-8 text-success" />
                </div>
                <h4 className="font-medium mb-3 text-lg">QA kiêm BA</h4>
                <p className="text-muted-foreground">100% effort</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary text-xl">
                <AlertTriangle className="w-6 h-6" />
                Thách thức với team
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Nguồn lực hạn chế:</strong> 2 developers + 1 QA/BA
                    cho toàn bộ dự án
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Áp lực thời gian:</strong> Cần phát triển nhanh
                    với chất lượng cao
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Nghiệp vụ:</strong> Khó khăn trong thống nhất và
                    làm rõ yêu cầu của khách hàng
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-success text-xl">
                <CheckCircle className="w-6 h-6" />
                Giải pháp với sự hỗ trợ của AI Agent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground mb-6">
                  Áp dụng AI Agent để tự động hóa các bước trong quy trình
                  phát triển:
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <div className="text-3xl font-bold text-primary">5</div>
                    <div className="text-sm text-muted-foreground">
                      AI Agents
                    </div>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <div className="text-3xl font-bold text-accent">
                      50% - 60%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Tự động hóa
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>,

    // Page 3: Quy trình demo với AI Agent
    <div key="demo-process" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-accent/10 to-success/10 relative">
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${codeMatrixBg})` }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Quy trình Demo với AI Agent
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            5 bước tự động hóa từ viết test case đến automation testing
          </p>
        </div>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="flex items-center gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-primary/20">
              1
            </div>
            <Card className="flex-1 border-none shadow-medium group-hover:shadow-large transition-all duration-500 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <TestTube className="w-6 h-6 text-primary animate-pulse" />
                  <h3 className="text-lg font-semibold text-primary">
                    QA Agent 1: Tự động viết Test Case
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Dựa trên specification từ BA, AI agent tự động sinh ra
                  test case chi tiết và lưu thành file
                </p>
                <div className="flex items-center gap-2 text-sm">
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

          {/* Step 2 */}
          <div className="flex items-center gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-accent/20">
              2
            </div>
            <Card className="flex-1 border-none shadow-medium group-hover:shadow-large transition-all duration-500 bg-gradient-to-br from-accent/5 to-accent/10">
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

          {/* Step 3 */}
          <div className="flex items-center gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-success to-success/70 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-success/20">
              3
            </div>
            <Card className="flex-1 border-none shadow-medium group-hover:shadow-large transition-all duration-500 bg-gradient-to-br from-success/5 to-success/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="w-6 h-6 text-success animate-pulse" />
                  <h3 className="text-lg font-semibold text-success">
                    Dev Agent 3: Viết Unit Test
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Tự động sinh unit test dựa trên code đã được review để
                  đảm bảo coverage tốt
                </p>
                <div>
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

          {/* Step 4 */}
          <div className="flex items-center gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-warning to-warning/70 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-warning/20">
              4
            </div>
            <Card className="flex-1 border-none shadow-medium group-hover:shadow-large transition-all duration-500 bg-gradient-to-br from-warning/5 to-warning/10">
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

          {/* Step 5 */}
          <div className="flex items-center gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-primary/20">
              5
            </div>
            <Card className="flex-1 border-none shadow-medium group-hover:shadow-large transition-all duration-500 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-primary animate-pulse" />
                  <h3 className="text-lg font-semibold text-primary">
                    QA Agent 2: Automation Testing
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Dựa trên test case từ bước 1, tự động chạy automation
                  test để kiểm tra tính năng
                </p>
                <div>
                  <Badge variant="outline" className="border-primary/30">
                    n8n Workflow Integration
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>,

    // Page 4: Kết luận
    <div key="conclusion" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-success/10 via-warning/10 to-accent/10 relative">
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${aiNetworkBg})` }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Kết luận
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Đánh giá ưu điểm và những hạn chế cần khắc phục khi áp dụng AI
            Agent
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-none shadow-soft bg-gradient-to-br from-success/5 to-success/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-success text-xl">
                <CheckCircle className="w-6 h-6" />
                Ưu điểm
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Tăng hiệu quả:</strong> Giảm 80% thời gian cho các
                    tác vụ lặp lại
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Tối ưu nguồn lực:</strong> Team nhỏ có thể đảm
                    nhiệm dự án lớn hơn
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Chất lượng ổn định:</strong> Giảm human error, đảm
                    bảo consistency
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Phản hồi nhanh:</strong> Notification tự động và
                    real-time
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-soft bg-gradient-to-br from-warning/5 to-warning/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-warning text-xl">
                <AlertTriangle className="w-6 h-6" />
                Hạn chế cần khắc phục
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Dependency:</strong> Phụ thuộc vào chất lượng của
                    AI model
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Setup phức tạp:</strong> Cần thời gian để config
                    và fine-tune
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Monitoring:</strong> Cần giám sát để đảm bảo
                    output quality
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Cost:</strong> Chi phí API calls và infrastructure
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="border-none shadow-medium bg-gradient-to-r from-primary/10 via-accent/10 to-success/10">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
                Tóm lại
              </h3>
              <p className="text-lg text-muted-foreground">
                AI Agent mở ra nhiều cơ hội tối ưu hóa quy trình phát triển phần mềm,
                tuy nhiên cần cân nhắc kỹ về chi phí và chất lượng kiểm soát
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>,

    // Page 5: Thanks for listening (Full Screen)
    <div key="thanks" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-accent/20 to-success/20 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${codeMatrixBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <div className="text-center relative z-10 px-6">
        <div className="mb-12">
          <div className="w-32 h-32 bg-gradient-to-br from-primary via-accent to-success rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse shadow-2xl">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
            Thanks for Listening!
          </h1>
          <p className="text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto">
            Cảm ơn các bạn đã lắng nghe về case study áp dụng AI Agent
            trong phát triển phần mềm
          </p>
        </div>

        <div className="flex items-center justify-center gap-12 text-2xl text-muted-foreground flex-wrap mb-12">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-primary rounded-full animate-pulse"></div>
            <span className="font-medium">Team Early Birds</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-accent rounded-full animate-pulse"></div>
            <span className="font-medium">Newwave Solutions</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-success rounded-full animate-pulse"></div>
            <span className="font-medium">Mitec Eat Easy</span>
          </div>
        </div>

        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <p className="text-xl text-muted-foreground italic mb-4">
            "Chủ động, nhanh nhạy, sáng tạo, không ngại khó.
          </p>
          <p className="text-xl text-muted-foreground italic">
            Sẵn sàng học hỏi, chinh phục mọi dự án."
          </p>
        </div>
      </div>
    </div>
  ];

  return (
    <div className="relative">
      {/* Page Container with flip animation */}
      <div 
        className={`transition-all duration-800 ${
          isFlipping ? 'animate-flip-next' : ''
        }`}
      >
        {pages[currentPage]}
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-background/95 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevPage}
            disabled={currentPage === 0 || isFlipping}
            className="rounded-full hover:bg-primary/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-1 px-4">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => flipToPage(i)}
                disabled={isFlipping}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentPage 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={nextPage}
            disabled={currentPage === totalPages - 1 || isFlipping}
            className="rounded-full hover:bg-primary/10"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Page indicator */}
      <div className="fixed top-8 right-8 z-50">
        <div className="bg-background/95 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-lg">
          <span className="text-sm font-medium text-muted-foreground">
            {currentPage + 1} / {totalPages}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;