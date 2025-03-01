"use client"
import React, { useEffect, useState } from 'react';
import StatsCards from './_components/stats-card';
import PerformanceChart from './_components/performance-chart';
import QuizList from './_components/quiz-list';
import { getAssessments } from '@/actions/interview.action';

interface QuestionsProps {
  // Define the structure of QuestionsProps here
}

interface Assessment {
  id: string;
  userId: string;
  quizScore: number;
  questions: QuestionsProps[];
  category: string;
  createdAt: string;
  updatedAt: string;
  improvementTip: string | null;
}

const InterviewPage = () => {
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const data = await getAssessments();
        setAssessments(data);
      } catch (error) {
        setError('Failed to fetch assessments');
      } finally {
        setLoading(false);
      }
    };

    fetchAssessments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold text-primary">
          Interview Preparation
        </h1>
      </div>
      <div className="space-y-6">
        <StatsCards assessments={assessments} />
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  );
};

export default InterviewPage;