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
import "../simple-transitions.css";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionType, setTransitionType] = useState<'fade' | 'slide' | 'scale'>('fade');

  const totalPages = 5;

  const flipToPage = (pageIndex: number) => {
    if (isTransitioning || pageIndex === currentPage) return;
    
    setIsTransitioning(true);
    setTransitionType('slide');
    
    // Delay page change to allow slide out animation
    setTimeout(() => {
      setCurrentPage(pageIndex);
      // Allow slide in animation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 250);
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      flipToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      flipToPage(currentPage - 1);
    }
  };

  // Auto-advance disabled - only manual navigation
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (currentPage < totalPages - 1 && !isTransitioning) {
  //       nextPage();
  //     }
  //   }, 8000); // Auto-advance every 8 seconds

  //   return () => clearTimeout(timer);
  // }, [currentPage, isTransitioning]);

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
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
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
            ăn Mitec hợp tác với Newwave Solutions để xây một ứng dụng hỗ trợ
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
                Nâng cấp quy trình phát triển với AI Agent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground mb-6">
                  Áp dụng AI Agent để tự động hóa các bước trong quy trình
                  phát triển phần mềm, giúp team nhỏ có thể đảm nhiệm
                  dự án lớn hơn với chất lượng ổn định.
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
    <div key="demo-process" className="demo-process min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex flex-col justify-center items-center p-8 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Quy trình Demo với AI Agent
        </h1>
        
        <div className="relative">
          {/* Process Flow Container */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center justify-items-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center animate-step-appear" style={{ animationDelay: '0.5s' }}>
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg shadow-cyan-500/50">
                1
              </div>
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20 w-72 h-48 flex flex-col justify-center text-center">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-lg font-bold mb-3">QA Agent 1: Tự động viết Test Case</h3>
                <p className="text-sm text-gray-300">Dựa trên specification từ BA, AI agent tự động sinh ra test case chi tiết và lưu thành file</p>
              </div>
            </div>


            {/* Step 2 */}
            <div className="flex flex-col items-center animate-step-appear" style={{ animationDelay: '1.0s' }}>
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg shadow-purple-500/50">
                2
              </div>
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20 w-72 h-48 flex flex-col justify-center text-center">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-lg font-bold mb-3">Dev Agent: Code Review tự động</h3>
                <p className="text-sm text-gray-300">Sau khi developer tạo PR, AI agent thực hiện review code ở 2 chế độ và gửi thông báo</p>
              </div>
            </div>


            {/* Step 3 */}
            <div className="flex flex-col items-center animate-step-appear" style={{ animationDelay: '1.5s' }}>
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg shadow-emerald-500/50">
                3
              </div>
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20 w-72 h-48 flex flex-col justify-center text-center">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-bold mb-3">Dev Agent 3: Viết Unit Test</h3>
                <p className="text-sm text-gray-300">Tự động sinh unit test dựa trên code đã được review để đảm bảo coverage tốt</p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center justify-items-center mt-8">
            {/* Step 4 */}
            <div className="flex flex-col items-center animate-step-appear" style={{ animationDelay: '2.0s' }}>
              <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg shadow-pink-500/50">
                4
              </div>
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20 w-72 h-48 flex flex-col justify-center text-center">
                <div className="text-3xl mb-4">✅</div>
                <h3 className="text-lg font-bold mb-3">Senior Dev: Merge & Deploy</h3>
                <p className="text-sm text-gray-300">Senior developer thực hiện merge code và deploy, hệ thống tự động thông báo kết quả</p>
              </div>
            </div>


            {/* Step 5 */}
            <div className="flex flex-col items-center animate-step-appear" style={{ animationDelay: '2.5s' }}>
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg shadow-orange-500/50">
                5
              </div>
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20 w-72 h-48 flex flex-col justify-center text-center">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-bold mb-3">QA Agent 2: Automation Testing</h3>
                <p className="text-sm text-gray-300">Dựa trên test case từ bước 1, tự động chạy automation test để kiểm tra tính năng</p>
              </div>
            </div>


            {/* Step 6 */}
            <div className="flex flex-col items-center animate-step-appear" style={{ animationDelay: '3.0s' }}>
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg shadow-teal-500/50">
                6
              </div>
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20 w-72 h-48 flex flex-col justify-center text-center">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-lg font-bold mb-3">QA: Review Test Cases</h3>
                <p className="text-sm text-gray-300">QA review lại các test case đã được chạy auto để đảm bảo chất lượng</p>
              </div>
            </div>
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
    <div className="relative w-full h-full slide-container">
      {/* Page Container with slide transitions */}
      <div 
        className={`page-slide-${isTransitioning ? 'exit' : 'enter'}-active`}
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
            disabled={currentPage === 0 || isTransitioning}
            className="btn-gentle rounded-full hover:bg-primary/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-1 px-4">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => flipToPage(i)}
                disabled={isTransitioning}
                className={`indicator-gentle w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentPage 
                    ? 'bg-primary active' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={nextPage}
            disabled={currentPage === totalPages - 1 || isTransitioning}
            className="btn-gentle rounded-full hover:bg-primary/10"
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